export type FocusAreaId = 'blood_glucose' | 'medication' | 'food_tracking' | 'exercise' | 'weight_management' | 'blood_pressure' | 'a1c';

export type FocusArea = {
    id: FocusAreaId;
    name: string;
};
