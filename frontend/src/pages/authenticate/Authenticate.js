import { useState } from 'react';
import StepPhoneEmail from '../steps/stepPhoneEmail/StepPhoneEmail';
import StepOtp from '../steps/stepOtp/StepOtp';

const steps = [StepPhoneEmail, StepOtp];

export default function Authenticate() {
  const [step, setStep] = useState(0);
  const Step = steps[step];

  const onNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  return <Step onNext={onNext} />;
}
