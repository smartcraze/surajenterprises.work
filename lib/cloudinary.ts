import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
  [key: string]: any;
}

interface UploadOptions {
  folder?: string;
  resource_type?: 'image' | 'video' | 'raw';
}


/**
 * Upload a buffer to Cloudinary
 * @param buffer - Buffer containing the file data
 * @param options - Optional upload options
 */
export const uploadBuffer = async (buffer: Buffer, options: UploadOptions = {}): Promise<CloudinaryUploadResult> => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: options.folder || 'PIctures',
        resource_type: options.resource_type || 'image',
      },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          reject(error);
        } else {
          resolve(result as CloudinaryUploadResult);
        }
      }
    );
    uploadStream.end(buffer);
  });
};