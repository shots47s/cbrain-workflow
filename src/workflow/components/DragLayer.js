import React from "react";
import PropTypes from "prop-types";
import { LineType } from "./types";

// GUI Layer containing the dragging edges
// while the user interacts with the workflow.
const DragLayer = undefined;

DragLayer.propTypes = {
  drags: PropTypes.arrayOf(LineType),
  onDragStart: PropTypes.func,
  onDragEnd: PropTypes.func
};

export default DragLayer;
