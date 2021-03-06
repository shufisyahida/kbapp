import React from 'react';

import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const noteSource = {
  beginDrag(props) {
    return {
      id: props.id
    };
  },
  isDragging(props, monitor) {
    return props.id === monitor.getItem().id;
  }
};

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const targetId = targetProps.id;
    const sourceId = sourceProps.id;
    const itemType = ItemTypes.NOTE;

    if(sourceId !== targetId) {
      targetProps.onMove({sourceId, targetId, itemType});
    }
  }
};

@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
@DragSource(ItemTypes.NOTE, noteSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Note extends React.Component {
  render() {
    const {connectDragSource, connectDropTarget, isDragging, id, onMove, editing, ...props} = this.props;
    const dragSource = editing ? a => a : connectDragSource;
    
    return dragSource(connectDropTarget(
      <li style={{
        opacity: isDragging ? 0 : 1
      }}{...props}>{props.children}</li>
    ));
  }
}