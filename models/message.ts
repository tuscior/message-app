
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Message = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    content: {
      type: String,
    },
    magic_number: {
      type: Number,
      required: true
    },
    created_at: Date
  },
  { strict: true }
);

Message.set('toJSON', {
  virtuals: true,
});

// Message.options.toJSON.transform = (_, ret) => {
//   delete ret._id;
//   delete ret.__v;
// };

Message.index({ "created_at": 1 }, { expireAfterSeconds: 300 })

export default mongoose.model('Message', Message);