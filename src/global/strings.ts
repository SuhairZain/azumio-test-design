import { FocusAreaId } from "../Onboarding/types";

export default {
    onboardingHeader: 'What are your main areas of focus?',
    onboardingReason: 'This will help us build a personalized experience for you',

    onboardingFocusAreaNames: {
        a1c: 'A1C',
        blood_glucose: 'Blood Glucose',
        blood_pressure: 'Blood Pressure',
        exercise: 'Exercise',
        food_tracking: 'Food Tracking',
        medication: 'Medication',
        weight_management: 'Weight Management',
    } as { [key in FocusAreaId]: string },

    back: 'back',
    next: 'next',
    done: 'done',
};
