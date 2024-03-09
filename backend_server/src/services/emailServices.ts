import * as nodemailer from "nodemailer";
import ejs from "ejs";
import config from "../config";

export type emailPathType = "forgotpassword";

/**
 * Email Services Class
 */

/**
 *
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // use TLS
  auth: {
    user: config.EMAIL_USERNAME,
    pass: config.EMAIL_PASSWORD,
  },
});

/**
 *
 * @param path
 * @param data
 * @returns
 */
const buildHTML = async (
  path: emailPathType,
  data = {},
): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    ejs.renderFile(`src/templates/${path}.ejs`, data, async (err, html) => {
      if (err) {
        console.log(err);
        reject(null);
      } else {
        resolve(html);
      }
    });
  });
};

/**
 *
 * @param to
 * @param data
 * @param path
 * @param subject
 * @param from
 */
export const sendEmail = async (
  to: string,
  data: object,
  path: emailPathType,
  subject: string,
  from = "neoChat <no-reply@neocChat.com>",
) => {
  try {
    const html = await buildHTML(path, data);
    if (html) {
      await transporter.sendMail({
        to,
        from,
        subject,
        html,
      });
    }

    return;
  } catch (error) {
    console.log(error);
    if (error as string) {
      console.log(error);
    }
    return;
  }
};
