import Skill from "./skill.model.js";
export const getAllSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find({
      isActive: true,
    })
      .populate("category", "title")
      .sort({ order: 1 });

    res.status(200).json({
      success: true,
      data: skills,
    });
  } catch (error) {
    next(error);
  }
};
export const getSkillById = async (req, res, next) => {
  try {
    const skill = await Skill.findOne({
      _id: req.params.id,
      isActive: true,
    }).populate("category", "title");

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    next(error);
  }
};

export const createSkill = async (req, res, next) => {
  try {
    const  {
        name, 
        iconUrl,
        category,
        order ,
      }= req.body;
    const skill = await Skill.create({
      name,
      iconUrl,
      category,
      order,
    });

    res.status(201).json({
      success: true,
      message: "Skill created successfully",
      data: skill,
    });
  } catch (error) {
    next(error);
  }
};

export const updateSkill = async (req, res, next) => {
  try {
       const  {
        name, 
        iconUrl,
        category,
        order ,
      }= req.body;
    const skill = await Skill.findOneAndUpdate(
      {
        _id: req.params.id,
        isActive: true,
      },
    {
        name, 
        iconUrl,
        category,
        order ,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Skill updated successfully",
      data: skill,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const skill = await Skill.findOneAndUpdate(
      {
        _id:id,
        isActive: true,
      },
      {
        isActive: false,
      },
      {
        new: true,
      }
    );

    if (!skill) {
      return res.status(404).json({
        success: false,
        message: "Skill not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Skill deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};