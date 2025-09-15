export const getCurrentDateTime = () => {
    const now = new Date();

    const day = now.getDate().toString().padStart(2, '0');
    const monthIndex = now.getMonth(); // 0 - 11
    const year = now.getFullYear();

    // Array nama bulan
    const monthNames = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    const monthName = monthNames[monthIndex]; // Ambil nama bulan sesuai index

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Ubah ke format 12 jam
    hours = hours % 12 || 12;

    return {
        day,
        month: monthName, // Sudah jadi "September"
        year,
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        ampm,
        dateFormat: `${day} ${monthName} ${year}`, // Contoh: 15 September 2025
        timeFormat: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`, // Contoh: 02:35 PM
    };
};
