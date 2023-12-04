import { errorMessages } from "../CONSTANTS";
import { connection } from "../dbConnection";
import { isValid } from "../utils/isValidText";
import { getUserData } from "../utils/getUserData";
import { ControllerType } from "../Types";

export type HabitType = {
  habit_layer: string;
  habit_name: string;
  habit_goal: string;
  habit_id: number;
};

const GetHabitsController: ControllerType = async (req, res) => {
  try {
    const header = req.headers;

    const userId = (await getUserData(header))?.user_id;

    if (!userId) {
      throw new Error(errorMessages.userNotExists);
    }

    const { rows }: { rows: HabitType[] } = await connection.query(
      "SELECT habit_layer,habit_name,habit_goal,habit_id FROM habits h JOIN users u ON h.user_id = u.user_id WHERE u.user_id = $1",
      [userId]
    );

    res.status(200).json({ response: rows });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};

const CreateHabitController: ControllerType = async (req, res) => {
  try {
    const { habit_layer, habit_goal, habit_name } = req.body;
    const header = req.headers;

    const userId = (await getUserData(header))?.user_id;

    if (!isValid([habit_layer, habit_goal, habit_name]) || !userId) {
      throw new Error(errorMessages.invaliCredentials);
    }

    const {
      rows: [habit],
    } = await connection.query(
      "INSERT INTO habits (habit_layer,habit_name,habit_goal,user_id) VALUES ($1,$2,$3,$4) RETURNING *",
      [habit_layer, habit_name, habit_goal, userId]
    );

    if (Object.keys(habit)?.length) {
      res.status(201).json({ response: "Habit created successfully" });
    } else {
      throw new Error(errorMessages.internalError);
    }
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};

const DeleteHabitController: ControllerType = async (req, res) => {
  try {
    const { id } = req.params;

    await connection.query("DELETE FROM habits WHERE habit_id = $1", [id]);

    res.status(200).json({ response: "Habit deleted successfully" });
  } catch (error) {
    res.status(500).json({ response: error.message });
  }
};

export { GetHabitsController, CreateHabitController, DeleteHabitController };
