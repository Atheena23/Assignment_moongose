const mongoose = required('mongoose');
const studentSchema = new mongoose.schema({
  name:{type:String,
    required:true},
  email: {type:String,
    unique: true,
    required: true},
    enrollmentDate:{type: Date,
      default: Date.now,
    },
    courses:[
      {
        type: mongoose.schema.Type.ObjectId,
        ref: Course
      }
  ]
})
const courseSchema = new mongoose.schema({
  title: {type:String,
    required: true
  },
  description:{type:String},
  durationWeeks:{type:Number,
    required: true
  },
  instructor:{type:String,
    required:true
  }
})
const Student = mongoose.model(studentSchema,studentSchema)