import React from "react";
import ReactDOM from "react-dom";
import myData from './test.json';


class GridElement extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateIds = this.props.updateIds.bind(this);
    this.state = {
      isHovering: false,
      isClicked: false,
      ids: this.props.ids,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  handleClick() {
    this.setState(this.setClickState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  setClickState(state) {
    if (true) {
      this.props.updateIds(this.props.data.id);
    }
    return {
      isClicked: !state.isClicked,
    };
  }

  render() {
    return (
      <div
        key={this.props.data.id}
        className={
          this.state.isClicked ?
            this.state.isHovering ? 'container-fluid bg-success border border-warning text-center' : 'container-fluid row bg-success text-center' :
            this.state.isHovering ? 'container-fluid bg-secondary border border-warning text-center' : 'container-fluid row bg-secondary text-center'}

        style={{ height: "70px", margin: "5px" }}
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}
        onClick={this.handleClick}>

        <div className='col-sm-6'>
          <img src={this.props.data.url} style={{ height: "40px" }}></img>
        </div>

        <div className="col-sm-6 text-center">
          <span>{this.props.data.name}</span>
        </div>

      </div>
    )
  };
};

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.alertIds = this.alertIds.bind(this);
  }
  alertIds() {
    alert(`Selected element ID:
      ${this.props.ids0}
      ${this.props.ids1}
      ${this.props.ids2}
      ${this.props.ids3}
      ${this.props.ids4}
      ${this.props.ids5}`);
  }

  render() {
    return (
      <div className='text-center' >
        <button
          type="button"
          onClick={this.alertIds}
          style={{ margin: "5px" }}
        >Submit</button>
      </div>
    )
  }
}


class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.updateIds = this.updateIds.bind(this);
    this.state = {
      ids0: "",
      ids1: "",
      ids2: "",
      ids3: "",
      ids4: "",
      ids5: "",
      toggle0: true,
      toggle1: true,
      toggle2: true,
      toggle3: true,
      toggle4: true,
      toggle5: true,
    };
  };
  updateIds(value) {
    switch (value) {
      case this.props.data[0].id:
        if (this.state.toggle0) {
          this.setState({ ids0: value });
          this.setState({ toggle0: false });
        } else {
          this.setState({ ids0: " " });
          this.setState({ toggle0: true });
        };
        break;
      case this.props.data[1].id:
        if (this.state.toggle1) {
          this.setState({ ids1: value });
          this.setState({ toggle1: false });
        } else {
          this.setState({ ids1: " " });
          this.setState({ toggle1: true });
        };
        break;
      case this.props.data[2].id:
        if (this.state.toggle2) {
          this.setState({ ids2: value });
          this.setState({ toggle2: false });
        } else {
          this.setState({ ids2: " " });
          this.setState({ toggle2: true });
        };
        break;
      case this.props.data[3].id:
        if (this.state.toggle3) {
          this.setState({ ids3: value });
          this.setState({ toggle3: false });
        } else {
          this.setState({ ids3: " " });
          this.setState({ toggle3: true });
        };
        break;
      case this.props.data[4].id:
        if (this.state.toggle4) {
          this.setState({ ids4: value });
          this.setState({ toggle4: false });
        } else {
          this.setState({ ids4: " " });
          this.setState({ toggle4: true });
        };
        break;
      case this.props.data[5].id:
        if (this.state.toggle5) {
          this.setState({ ids5: value });
          this.setState({ toggle5: false });
        } else {
          this.setState({ ids5: " " });
          this.setState({ toggle5: true });
        };
        break;
    }
  };
  render() {
    return (
      <div>{
        <div>
          <GridElement data={this.props.data[0]} ids={this.state.ids0} updateIds={this.updateIds.bind(this)} />
          <GridElement data={this.props.data[1]} ids={this.state.ids1} updateIds={this.updateIds.bind(this)} />
          <GridElement data={this.props.data[2]} ids={this.state.ids2} updateIds={this.updateIds.bind(this)} />
          <GridElement data={this.props.data[3]} ids={this.state.ids3} updateIds={this.updateIds.bind(this)} />
          <GridElement data={this.props.data[4]} ids={this.state.ids4} updateIds={this.updateIds.bind(this)} />
          <GridElement data={this.props.data[5]} ids={this.state.ids5} updateIds={this.updateIds.bind(this)} />
          <Button
            ids0={this.state.ids0}
            ids1={this.state.ids1}
            ids2={this.state.ids2}
            ids3={this.state.ids3}
            ids4={this.state.ids4}
            ids5={this.state.ids5}
          />
        </div>
      }
      </div>
    );
  }
};


ReactDOM.render(
  <Grid data={myData} />,
  document.getElementById('root')
);