require("./config/database");

const app = require("express")();
const port = process.env.PORT || 5000;

const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, "./uploads")
    },
    filNname: (req,filename,callback) => {
        callback(null,file.originalName)
    }
})

const upload = multer({storage: storage})

const cors = require("cors");
app.use(cors());

const UseRouter = require("./api/User");
const AdopterRouter = require("./api/Adopter")
const EmployeeRouter = require("./api/Employee")
const ShowUsersRouuter = require("./api/ShowUsers")
const UpdateInfoRouter = require("./api/UpdateInfo")
const InfoOperationsRouter = require("./api/InfoOperations")
const AdoptionRouter = require("./api/Adoption")
const DonaionRouter = require("./api/Donation")

const bodyParser = require("express").json;
app.use(bodyParser());

app.use("/user", UseRouter);
app.use("/adopter", AdopterRouter);
app.use("/employee", EmployeeRouter);
app.use("/displayusers", ShowUsersRouuter);
app.use("/updateinfo", UpdateInfoRouter);
app.use("/general", InfoOperationsRouter);
app.use("/adoption", AdoptionRouter);
app.use("/donation", DonaionRouter);

app.listen(port, () => {
    console.log(`Server started listening on port ${port}`);
})