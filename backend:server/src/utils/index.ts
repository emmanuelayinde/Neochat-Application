import moment, { DurationInputArg1, DurationInputArg2 } from "moment";
import crypto from "crypto";
import multer from "multer";
import otpGenerator from "otp-generator";

/**
 * Generate hashed
 *
 * @param len : number
 * @returns
 */
export const generateOTP = async (len = 6) => {
  const otp = otpGenerator.generate(len, {
    digits: true,
    upperCaseAlphabets: true,
    lowerCaseAlphabets: false,
    specialChars: false,
  });
  return otp;
};

/**
 * Generate hashed
 *
 * @param len : number
 * @returns
 */
export const generateToken = async (len = 32) => {
  const randomString = crypto.randomBytes(len).toString("hex");
  console.log({ randomString });
  return randomString;
};

/**
 * Extend time about a particular amount in a particular unit
 *
 * @param amount
 * @param unit
 * @returns
 */
export const extendTime = (
  amount: DurationInputArg1,
  unit: DurationInputArg2
) => {
  const now = moment();
  return now.add(amount, unit).toDate();
};

/**
 * Multer Upload
 *
 * @returns
 */
const storage = multer.memoryStorage();
export const upload = multer({ storage: storage });
