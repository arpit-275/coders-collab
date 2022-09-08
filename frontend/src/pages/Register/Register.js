import { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp';
import StepName from '../Steps/StepName';
import StepAvatar from '../Steps/StepAvatar';
import StepUsername from '../Steps/StepUsername';
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
