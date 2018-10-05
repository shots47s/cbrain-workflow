import * as R from "ramda";
import { combineReducers } from "redux";
import { combineEpics } from "redux-observable";
import {
  startConnectionOutput,
  endConnectionInput,
  startConnectionInput,
  endConnectionOutput,
  continueConnection,
  makeConnectionEpic,
  connectionDragReducer,
  placeNodeType,
  editNodeContent,
  nodeConfigEpic,
  startNodeMove,
  endNodeMove,
  continueNodeMove,
  moveNodesEpic,
  editNode,
  removeNode,
  graphReducer
} from "./graph";

import {
  startSelection,
  continueSelection,
  endSelection,
  selectionBoxEpic,
  selectionBoxReducer,
  removeSelection,
  startMoveSelection,
  continueMoveSelection,
  endMoveSelection,
  selectionEpic,
  selectionReducer,
  copySelection,
  pasteClipboard,
  clipboardEpic,
  clipboardReducer
} from "./selection";

import {
  startPan,
  continuePan,
  endPan,
  viewboxEpic,
  viewboxReducer
} from "./viewbox";

import { addTaskDescriptor, taskDescriptorsReducer } from "./task-descriptors";

export const rootEpic = combineEpics(
  makeConnectionEpic,
  moveNodesEpic,
  nodeConfigEpic,
  selectionBoxEpic,
  selectionEpic,
  clipboardEpic,
  viewboxEpic
);

export const rootReducer = combineReducers({
  taskDescriptors: taskDescriptorsReducer,
  graph: graphReducer,
  connectionDrag: connectionDragReducer,
  selectionBox: selectionBoxReducer,
  selection: selectionReducer,
  clipboard: clipboardReducer,
  viewbox: viewboxReducer
});

/* Transform a map of action builders to a map of redux dispatch functions
 * after being given a dispatch function.
 */
const makeDispatchers = actionBuilders => dispatch =>
  R.mapObjIndexed(
    actionBuilder =>
      R.compose(
        dispatch,
        actionBuilder
      ),
    actionBuilders
  );

export const mapDispatchToProps = makeDispatchers({
  startConnectionOutput,
  endConnectionInput,
  startConnectionInput,
  endConnectionOutput,
  continueConnection,
  startNodeMove,
  endNodeMove,
  continueNodeMove,
  editNode,
  removeNode,
  placeNodeType,
  editNodeContent,
  startSelection,
  continueSelection,
  endSelection,
  removeSelection,
  startMoveSelection,
  continueMoveSelection,
  endMoveSelection,
  copySelection,
  pasteClipboard,
  startPan,
  continuePan,
  endPan,
  addTaskDescriptor
});
