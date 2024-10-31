const express = require('express')
const router = express.Router()
const User = require('./userSchema')




router.post('/personal-detail', (req, res) => {

    const { FullName, Address, PhoneNo, email, DOB, LinkedIn, Website, Photo } = req.body
    // const user=new User(FullName, Address,PhoneNo, email,DOB,LinkedIn,Website)
    const user = new User({
        personalDetail: {
            fullName: FullName,
            address: Address,
            phoneNo: PhoneNo,
            emailAddress: email,
            dob: DOB,
            linkdin: LinkedIn,
            website: Website,
            photo: Photo
        }
    });
    user.save().then((savedUser) => { res.status(201).json({ success: 'Personal Detail save ', userId: savedUser._id }) })
        .catch((err) => res.status(500).json({ error: 'Failed to save user', details: err }));
})

// router.post('/education' ,(req,res)=>{
//     // const{ Course,School,Grade, Year}=req.body
//     // const user = new User({
//     //     Education: {
//     //         course:Course,
//     //         University:School,
//     //        Grade:Grade,
//     //        year:Year
//     //     }
//     // });
//     const educationData = req.body;

//     const user = new User({
//         Education: educationData
//     });
//     user.save().then(()=>{res.status(201).json({success:'user  education save'})})
//     .catch((err) => res.status(500).json({ error: 'Failed to save user', details: err }));

// })

router.post('/education', (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1]; // Extract user ID

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }

    const educationData = req.body;

    User.findOneAndUpdate(
        { _id: userId },
        { $push: { Education: educationData } },
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User education detail saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user education', details: err });
        });
});


router.post('/experience', (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1]; // Extract user ID

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }

    const experienceData = req.body;

    User.findOneAndUpdate(
        { _id: userId },
        { $push: { Experience: experienceData} },
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User Experience detail saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user Experience', details: err });
        });
   
})

router.post('/skill', (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1]; // Extract user ID

    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }


    // Ensure that SkillData is properly formatted as an array of objects
    const SkillData = req.body.map(skill => ({ userSkill: skill }));
    User.findOneAndUpdate(
        { _id: userId },
        { $push: { Skill: SkillData} },
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User Skill detail saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user skills', details: err });
        });
})

router.post('/objective', (req, res) => {
     const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }
    const objectivData = req.body
    // console.log("Request Body:", req.body);
    User.findOneAndUpdate(
        { _id: userId },
        { "Objective.objectiver": objectivData.objectiver },
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User objectiv saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user objective', details: err });
        });
})

router.post('/project', (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }
    const projectData = req.body
    User.findOneAndUpdate(
        { _id: userId },
        { $push: {Project: projectData} },
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User project saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user project', details: err });
        });
  
})

router.post('/achievement', (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }
    const achivmentData = req.body
    User.findOneAndUpdate(
        { _id: userId },
        { "Achievment.achievment":achivmentData.myAchiev},
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User achievment saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user achievment', details: err });
        });
  
})


router.post('/language', (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }
    const LanguageData = req.body
    console.log('reqbody',LanguageData)
    User.findOneAndUpdate(
        { _id: userId },
        { "Language.language":LanguageData.mylan},
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User language saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user language', details: err });
        });
  
   
})
router.post('/additionalinfo', (req, res) => {
    const authorizationHeader = req.headers['authorization'];
    const userId = authorizationHeader && authorizationHeader.split(' ')[1];
    if (!userId) {
        return res.status(400).json({ error: 'User ID is required in the Authorization header' });
    }
    const AdditionalData = req.body
  
    User.findOneAndUpdate(
        { _id: userId },
        { "AdditionalInfo.additionalInfo":AdditionalData.myInfo},
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(201).json({ success: 'User Additional info saved', user });
        })
        .catch(err => {
            res.status(500).json({ error: 'Failed to save user  Additional info', details: err });
        });
  
})
router.get('/userDetail/:userId', (req, res) => {
    const userId = req.params.userId;

    User.findById(userId)
        .then(user => {
            if (user) {
                res.status(200).json({ success: 'User details retrieved successfully', user });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        })
        .catch(err => {
            console.error('Error retrieving user:', err); 
            res.status(500).json({ error: 'Failed to retrieve user details', details: err.message });
        });
});


module.exports = router;