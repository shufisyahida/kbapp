import uuid from 'node-uuid';
import alt from '../libs/alt';
import LaneActions from '../actions/LaneActions';
import update from 'react-addons-update';

class LaneStore {
  constructor() {
    this.bindActions(LaneActions);

    this.lanes = [];
  }
  
  create(lane) {
    const lanes = this.lanes;

    lane.id = uuid.v4();
    lane.notes = lane.notes || [];

    this.setState({
      lanes: lanes.concat(lane)
    });
  }

  update(updatedLane) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === updatedLane.id) {
        return Object.assign({}, lane, updatedLane);
      }

      return lane;
    });

    this.setState({lanes});
  }
  delete(id) {
    this.setState({
      lanes: this.lanes.filter(lane => lane.id !== id)
    });
  }

  attachToLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.notes.includes(noteId)) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }

      if(lane.id === laneId) {
        if(lane.notes.includes(noteId)) {
          console.warn('Already attached note to lane', lanes);
        }
        else {
          lane.notes.push(noteId);
        }
      }

      return lane;
    });

    this.setState({lanes});
  }

  detachFromLane({laneId, noteId}) {
    const lanes = this.lanes.map(lane => {
      if(lane.id === laneId) {
        lane.notes = lane.notes.filter(note => note !== noteId);
      }

      return lane;
    });

    this.setState({lanes});
  }

  move({sourceId, targetId, itemType}) {
    const lanes = this.lanes;
    
    if(itemType === 'note') {
      const sourceLane = lanes.filter(lane => lane.notes.includes(sourceId))[0];
      const targetLane = lanes.filter(lane => lane.notes.includes(targetId))[0];    
      const sourceNoteIndex = sourceLane.notes.indexOf(sourceId);
      const targetNoteIndex = targetLane.notes.indexOf(targetId);

      if(sourceLane === targetLane) {
        sourceLane.notes = update(sourceLane.notes, {
          $splice: [
            [sourceNoteIndex, 1],
            [targetNoteIndex, 0, sourceId]
          ]
        });
      } else {
        sourceLane.notes.splice(sourceNoteIndex, 1);
        targetLane.notes.splice(targetNoteIndex, 0, sourceId);
      }
    }

      
    if(itemType === 'lane') {
      const sourceLaneIndex = lanes.findIndex(lane => lane.id === sourceId ? true : false);
      const targetLaneIndex = lanes.findIndex(lane => lane.id === targetId ? true : false);
      const sourceLane = lanes.filter(lane => lane.id === sourceId)[0];

      lanes.splice(sourceLaneIndex, 1);
      lanes.splice(targetLaneIndex, 0, sourceLane);
    }

    this.setState({lanes});
  }
}

export default alt.createStore(LaneStore, 'LaneStore');