const getStudent = (req, res) => {
    res.send("Student Page");
}

const createStudent = (req, res) => {
    alert("Student created")
    res.send("Please create Student:")
}

export {getStudent, createStudent};