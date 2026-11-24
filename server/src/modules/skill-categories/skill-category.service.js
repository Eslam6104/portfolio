import SkillCategory from "./skill-category.model.js";

// GET ALL CATEGORIES
export const getAllCategories = async (req, res, next) => {
  try {
    const categories = await SkillCategory.find({
      isActive: true,
    }).sort({ order: 1 });

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
};

export const getCategoryById = async (req, res, next) => {
  try {
    const category = await SkillCategory.findOne({
      _id: req.params.id,
      isActive: true,
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const createCategory = async (req, res, next) => {
  try {
    const category = await SkillCategory.create({
      title: req.body.title,
    iconUrl: req.body.iconUrl,
      order: req.body.order,
    });

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};


export const updateCategory = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, iconUrl, order } = req.body;
    const category = await SkillCategory.findOneAndUpdate(
      {
        _id: id,
        isActive: true,
      },
      {
        title,
        iconUrl,
        order,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: category,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCategory = async (req, res, next) => {
  try {
    const category = await SkillCategory.findOneAndUpdate(
      {
        _id: req.params.id,
        isActive: true,
      },
      {
        isActive: false,
      },
      {
        new: true,
      }
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};