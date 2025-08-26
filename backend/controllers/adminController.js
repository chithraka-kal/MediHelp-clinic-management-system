

//API for adding doctor
const addDoctor = async (req, res) => {
    
    try {
        const { name, email, speciality, experience, degree, about, fees, address } = req.body;
        const imageFile = req.file;

    } catch (error) {
        
    }
}

export { addDoctor }