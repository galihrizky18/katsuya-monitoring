import { create } from 'zustand';

interface useModalProps {
    Tot_Modal: number;
    setTot_Modal: (Tot_Modal: number) => void;
}

const useModal = create<useModalProps>((set) => ({
    Tot_Modal: 0,
    setTot_Modal: (Tot_Modal: number) => set(() => ({ Tot_Modal })),
}));

export default useModal;
