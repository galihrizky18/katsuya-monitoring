import { create } from 'zustand';

interface useModalProps {
    Tot_Modal: number;
    Omzet_Modal: number;
    setTot_Modal: (Tot_Modal: number) => void;
    Set_Omzet_Modal: (Omzet_Modal: number) => void;
}

const useModal = create<useModalProps>((set) => ({
    Tot_Modal: 0,
    Omzet_Modal: 0,
    setTot_Modal: (Tot_Modal: number) => set(() => ({ Tot_Modal })),
    Set_Omzet_Modal: (Omzet_Modal: number) => set(() => ({ Omzet_Modal })),
}));

export default useModal;
