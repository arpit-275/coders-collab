import { useState } from 'react';
import StepPhoneEmail from '../steps/StepPhoneEmail';
import StepOtp from '../steps/StepOtp';
import StepName from '../steps/StepName';
import StepAvatar from '../steps/StepAvatar';
import StepUsername from '../steps/StepUsername';
import styles from './Register.module.css';

const steps = [StepPhoneEmail, StepOtp, StepName, StepAvatar, StepUsername];

export default function Register() {
  const [step, setStep] = useState(0);
  const Step = steps[step];

  const onNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return <Step onNext={onNext} />;
}
