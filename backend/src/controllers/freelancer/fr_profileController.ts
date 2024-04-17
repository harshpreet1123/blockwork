// controllers/freelancer/profileController.ts
import { Request, Response } from "express";
import Profile, { IProfile } from "../../models/freelancer/fr_ProfileModel";
import Auth from "../../models/freelancer/fr_AuthModel";

export const addProfileController = async (req: any, res: Response) => {
  try {
    var userId=req.userId;
    console.log(userId);
    // Check if user exists
    const user = await Auth.findById(Object(userId));
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if profile already exists
    const existingProfile = await Profile.findOne({ userId });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists" });
    }

    // Extract profile data from request body
    const { username, firstname, lastname, bio, profileImg, wallets, location, skills, social, phone } = req.body;

    // Create new profile document
    const newProfileData: IProfile = new Profile({
      user_id:userId,
      username,
      firstname,
      lastname,
      bio,
      profileImg,
      wallets,
      location,
      skills,
      social,
      phone,
    });

    // Save the new profile data
    const newProfile: IProfile = await Profile.create(newProfileData);

    res.status(201).json({ message: "Profile created successfully", profile: newProfile });
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: "Failed to create profile" });
  }
};

export const checkProfileExists = async (req: any, res: any): Promise<void> => {
  try {
    const { userId } = req.body;
    // Check if profile already exists
    const existingProfile = await Profile.findOne({ user_id: userId });
    if (existingProfile) {
      console.log("existing Profile");
      return res.status(200).json(true);
    }
    console.log("Profile no");
    return res.status(200).json(false);
  } catch (error) {
    console.error(`Error: ${error}`);
    res.status(500).json({ error: "Failed to check profile existence" });
  }
};

export const getProfileDetails = async (req: any, res: Response) => {
  try {
    const { userId } = req.body;
    const userProfile = await Profile.findOne({ user_id: userId });

    if (!userProfile) {
      throw new Error("User not found");
    }
    res.status(200).json(userProfile);
  } catch {
    res.status(404).send("User Not Found!");
  }
};