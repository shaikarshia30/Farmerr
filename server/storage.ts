import {
  type User,
  type InsertUser,
  type Job,
  type InsertJob,
  type Equipment,
  type InsertEquipment,
  type JobApplication,
  type InsertJobApplication,
  type OtpVerification,
  type InsertOtp,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByPhone(phone: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // OTP operations
  createOtp(otp: InsertOtp): Promise<OtpVerification>;
  getOtpByPhone(phone: string): Promise<OtpVerification | undefined>;
  deleteOtp(id: string): Promise<void>;
  
  // Job operations
  createJob(job: InsertJob): Promise<Job>;
  getJob(id: string): Promise<Job | undefined>;
  getJobsByFarmer(farmerId: string): Promise<Job[]>;
  getAllJobs(): Promise<Job[]>;
  updateJob(id: string, job: Partial<InsertJob>): Promise<Job | undefined>;
  deleteJob(id: string): Promise<void>;
  
  // Equipment operations
  createEquipment(equipment: InsertEquipment): Promise<Equipment>;
  getEquipment(id: string): Promise<Equipment | undefined>;
  getEquipmentByOwner(ownerId: string): Promise<Equipment[]>;
  getAllEquipment(): Promise<Equipment[]>;
  updateEquipment(id: string, equipment: Partial<InsertEquipment>): Promise<Equipment | undefined>;
  deleteEquipment(id: string): Promise<void>;
  
  // Job application operations
  createJobApplication(application: InsertJobApplication): Promise<JobApplication>;
  getJobApplicationsByJob(jobId: string): Promise<JobApplication[]>;
  getJobApplicationsByCoolie(coolieId: string): Promise<JobApplication[]>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private otps: Map<string, OtpVerification>;
  private jobs: Map<string, Job>;
  private equipmentItems: Map<string, Equipment>;
  private jobApplications: Map<string, JobApplication>;

  constructor() {
    this.users = new Map();
    this.otps = new Map();
    this.jobs = new Map();
    this.equipmentItems = new Map();
    this.jobApplications = new Map();
  }

  // User operations
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByPhone(phone: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find((user) => user.phone === phone);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { 
      ...insertUser,
      latitude: insertUser.latitude ?? null,
      longitude: insertUser.longitude ?? null,
      farmSize: insertUser.farmSize ?? null,
      vehicleType: insertUser.vehicleType ?? null,
      id,
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }

  // OTP operations
  async createOtp(insertOtp: InsertOtp): Promise<OtpVerification> {
    const id = randomUUID();
    const otp: OtpVerification = {
      ...insertOtp,
      id,
      createdAt: new Date(),
    };
    this.otps.set(id, otp);
    return otp;
  }

  async getOtpByPhone(phone: string): Promise<OtpVerification | undefined> {
    return Array.from(this.otps.values())
      .filter((otp) => otp.phone === phone && otp.expiresAt > new Date())
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())[0];
  }

  async deleteOtp(id: string): Promise<void> {
    this.otps.delete(id);
  }

  // Job operations
  async createJob(insertJob: InsertJob): Promise<Job> {
    const id = randomUUID();
    const job: Job = {
      ...insertJob,
      latitude: insertJob.latitude ?? null,
      longitude: insertJob.longitude ?? null,
      urgency: insertJob.urgency ?? null,
      id,
      createdAt: new Date(),
    };
    this.jobs.set(id, job);
    return job;
  }

  async getJob(id: string): Promise<Job | undefined> {
    return this.jobs.get(id);
  }

  async getJobsByFarmer(farmerId: string): Promise<Job[]> {
    return Array.from(this.jobs.values()).filter((job) => job.farmerId === farmerId);
  }

  async getAllJobs(): Promise<Job[]> {
    return Array.from(this.jobs.values());
  }

  async updateJob(id: string, updates: Partial<InsertJob>): Promise<Job | undefined> {
    const job = this.jobs.get(id);
    if (!job) return undefined;
    
    const updatedJob = { ...job, ...updates };
    this.jobs.set(id, updatedJob);
    return updatedJob;
  }

  async deleteJob(id: string): Promise<void> {
    this.jobs.delete(id);
  }

  // Equipment operations
  async createEquipment(insertEquipment: InsertEquipment): Promise<Equipment> {
    const id = randomUUID();
    const equipment: Equipment = {
      ...insertEquipment,
      latitude: insertEquipment.latitude ?? null,
      longitude: insertEquipment.longitude ?? null,
      availability: insertEquipment.availability ?? null,
      id,
      createdAt: new Date(),
    };
    this.equipmentItems.set(id, equipment);
    return equipment;
  }

  async getEquipment(id: string): Promise<Equipment | undefined> {
    return this.equipmentItems.get(id);
  }

  async getEquipmentByOwner(ownerId: string): Promise<Equipment[]> {
    return Array.from(this.equipmentItems.values()).filter((eq) => eq.ownerId === ownerId);
  }

  async getAllEquipment(): Promise<Equipment[]> {
    return Array.from(this.equipmentItems.values());
  }

  async updateEquipment(id: string, updates: Partial<InsertEquipment>): Promise<Equipment | undefined> {
    const equipment = this.equipmentItems.get(id);
    if (!equipment) return undefined;
    
    const updatedEquipment = { ...equipment, ...updates };
    this.equipmentItems.set(id, updatedEquipment);
    return updatedEquipment;
  }

  async deleteEquipment(id: string): Promise<void> {
    this.equipmentItems.delete(id);
  }

  // Job application operations
  async createJobApplication(insertApplication: InsertJobApplication): Promise<JobApplication> {
    const id = randomUUID();
    const application: JobApplication = {
      ...insertApplication,
      id,
      appliedAt: new Date(),
    };
    this.jobApplications.set(id, application);
    return application;
  }

  async getJobApplicationsByJob(jobId: string): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values()).filter((app) => app.jobId === jobId);
  }

  async getJobApplicationsByCoolie(coolieId: string): Promise<JobApplication[]> {
    return Array.from(this.jobApplications.values()).filter((app) => app.coolieId === coolieId);
  }
}

export const storage = new MemStorage();
