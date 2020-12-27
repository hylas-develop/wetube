import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) =>
  console.log(`❎ Error on DB Connection:${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

// export const videos = [
//     {
//         id:324596,
//         title: 'Video awesome',
//         description: 'This is something I love',
//         views: 24,
//         videoFile:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         creator:{
//             id:22222,
//             name:'Nicolas',
//             email: "nicolas@gmail.com"
//         }
//     },
//     {
//         id:231,
//         title: 'Video super',
//         description: 'This is something I love',
//         views: 24,
//         videoFile:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         creator:{
//             id:22222,
//             name:'Nicolas',
//             email: "nicolas@gmail.com"
//         }
//     },
//     {
//         id:123414,
//         title: 'Video nice',
//         description: 'This is something I love',
//         views: 24,
//         videoFile:'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
//         creator:{
//             id:22222,
//             name:'Nicolas',
//             email: "nicolas@gmail.com"
//         }
//     }
// ]
