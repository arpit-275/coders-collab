import { useState } from 'react';
import StepPhoneEmail from '../Steps/StepPhoneEmail';
import StepOtp from '../Steps/StepOtp';
import styles from './Login.module.css';

const steps = [StepPhoneEmail, StepOtp];

export default function Login() {
  const [step, setStep] = useState(0);
  const Step = steps[step];

  const onNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return <Step onNext={onNext} />;
}
