import { Request, Response } from "express";
import Profile, { IProfile } from "../../models/client/cl_ProfileModel";
import Auth from "../../models/client/cl_AuthModel";

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
    const { username, firstname, lastname,companyName, info, profileImg, bannerImg, wallets, location, social, phone } = req.body;

    // Create new profile document
    const newProfileData: IProfile = new Profile({
      user_id:userId,
      username,
      firstname,
      lastname,
      companyName,
      info,
      profileImg,
      bannerImg,
      wallets,
      location,
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
