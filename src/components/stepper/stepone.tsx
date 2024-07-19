"use client";
import React,{useState} from "react";
import { Input } from 'antd';
import { FileImageOutlined } from '@ant-design/icons';
import { CloudUploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};

const { TextArea } = Input;
const StepOne: React.FC = () => {
  const [textEnglish, setTextEnglish] = useState('');
  const [textArabic, setTextArabic] = useState('');
  return (
    <>
      <div className="flex flex-col">
        <div className="font-bold">Company Detail</div>
        <div className="min-h-30 bg-slate-200 rounded mt-5 p-5 text-sm">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <div className="text-slate-500 pb-3">Company Name (EN)</div>
              <div className="font-bold text-slate-600">Al Arab Construction</div>
            </div>
            <div className="flex flex-col">
              <div className="text-slate-500 pb-3">Company Name (AR)</div>
              <div className="font-bold text-slate-600">Al Arab Construction</div>
            </div>
            <div className="flex flex-col">
              <div className="text-slate-500 pb-3">Establishment Date</div>
              <div className="font-bold text-slate-600">19 MAY, 2018</div>
            </div>
          </div>
          <div className="mt-5">
            <div className="text-slate-500 pb-3 pt-5">List of Activities</div>
            <div className="font-bold text-slate-600">Al Arab Construction</div>
          </div>
        </div>
        <div className="font-bold mt-8"><span className="text-red">* </span>Company Type:</div>
        <div className="flex flex-col mb-4 mt-4 text-sm font-medium">
          <div className="flex items-center">
            <input type="radio" value="1" id="radioo" name="default-radio" required className="w-4 h-4 text-green-700 bg-gray-100" />
            <label className="ms-2 text-sm font-medium">Contractor</label>
          </div>
          <label className="ms-2 mt-2 ml-6">Specilize in construnction, renovation.</label>
        </div>
        <div className="flex flex-col mb-4 mt-4 text-sm font-medium">
          <div className="flex items-center">
            <input type="radio" value="" name="default-radio" required className="w-4 h-4 text-green-700 bg-gray-100" />
            <label className="ms-2 text-sm font-medium">Consultant</label>
          </div>
          <label className="ms-2 mt-2 ml-6">Specilize in construnction, renovation.</label>
        </div>
        <div className="flex flex-row space-x-8">
          <div className="font-bold mt-8">Description:</div>
          <div className="font-bold pt-1 pb-1 mt-7 pl-5 pr-5 rounded-full bg-slate-300">Ai generator</div>
        </div>
        <div className="flex flex-row space-x-8  mt-8">
          <div className="w-1/2">
            <label className="font-bold"><span className="text-red">* </span>English</label>
            <div className="mt-5">
              <TextArea 
                rows={6} 
                maxLength={1000} 
                value={textEnglish} 
                onChange={(e) => setTextEnglish(e.target.value)}
              />
              <div className="text-right">
                {textEnglish.length}/1000
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <label className="font-bold"><span className="text-red">* </span>Arabic</label>
            <div className="mt-5">
              <TextArea 
                rows={6} 
                maxLength={1000} 
                value={textArabic} 
                onChange={(e) => setTextArabic(e.target.value)}
              />
              <div className="text-right">
                {textArabic.length}/1000
              </div>
            </div>
          </div>
        </div>
        <div className="font-bold mt-8">Profile Picture</div>
        <div className="flex flex-col mb-4 mt-4">
          <div className="flex items-center bg-slate-100 w-full h-20 rounded">
            <FileImageOutlined className="ml-5" /><label className="ms-2">Select and image that showcase your work.</label>
          </div>
          <div className="mt-5">
          <Dragger {...props}>
            <p className="ant-upload-drag-icon">
              <CloudUploadOutlined className="cloudicon"/>
            </p>
            <p className="ant-upload-text"><span className="text-green-700 font-bold">Click to upload</span> or drap and drop</p>
            <p className="ant-upload-hint">
              PDF, DOC, XLXS or JPG
            </p>
          </Dragger>
        </div>
        </div>
      </div>

    </>
  );
};

export default StepOne;
