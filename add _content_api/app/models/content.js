import { genericConstants } from "../common/constants";

const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
  title: { type: String, default: "" },
  description: { type: String, default: "" },
  category: { type: String, default: "" },
  subCategory: { type: String, default: "" },
  ratePerView: { type: Number, default: 0 },
  startDate: { type: Number, default: Date.now() },
  endDate: { type: Number, default: Date.now() },
  isAdvertisement: { type: Boolean, default: false },
  advertiser: {
    name: { type: String, default: "" },
    _id: { type: String, default: "" },
  },
  product: {
    name: { type: String, default: "" },
    media: { type: String, default: "" },
    _id: { type: String, default: "" },
  },
  status: {
    type: String,
    default: "",
    enum: [
      genericConstants.contentStatus.ACTIVE,
      genericConstants.contentStatus.INACTIVE,
    ],
  },
  superCategory: {
    type: String,
    default: genericConstants.superCategory.DOG,
    enum: [
      genericConstants.superCategory.DOG,
      genericConstants.superCategory.CAT,
    ],
  },
  contentType: {
    type: String,
    default: genericConstants.contentType.VIDEO,
    enum: [
      genericConstants.contentType.VIDEO,
      genericConstants.contentType.PHOTO,
      genericConstants.contentType.DOCUMENT,
    ],
  },
  isDeleted: { type: Boolean, default: false },
  isInActive: { type: Boolean, default: false },
  addedOn: { type: Number, default: Date.now() },
  modifiedOn: { type: Number, default: Date.now() },
});

contentSchema.method({
  saveData: async function () {
    return this.save();
  },
});
contentSchema.static({
  findData: function (findObj) {
    return this.find(findObj);
  },
  findOneData: function (findObj) {
    return this.findOne(findObj);
  },
  findOneAndUpdateData: function (findObj, updateObj) {
    return this.findOneAndUpdate(findObj, updateObj, {
      upsert: true,
      new: true,
      setDefaultsOnInsert: true,
    });
  },
  findDataWithAggregate: function (findObj) {
    return this.aggregate(findObj);
  },
});
export default mongoose.model("mas-advertisers", contentSchema);
