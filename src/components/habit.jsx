import React, { Component } from "react";

class Habit extends Component {
  render() {
    return (
      <>
        <span className="habitName">Reading</span>;
        <span className="habitCount">8</span>;
        <button className="habit-button habit-increase">
          <i className="fas fa-square-plus"></i>
        </button>
        <button className="habit-button habit-decrease">
          <i className="fas fa-square-minus"></i>
        </button>
        <button className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </>
    );
  }
}

export default Habit;
