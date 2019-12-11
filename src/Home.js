import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles"; 

import Grid from "@material-ui/core/Grid"; 
import Typography from "@material-ui/core/Typography"; 
import { setSpaceList } from "./actions"
const styles = theme => ({
   
});

class Home extends React.Component {
  
  async componentDidMount () {
    let response = await Axios.get("https://api.myjson.com/bins/10aaj2", 
        { headers: { "Content-Type": "application/json" } 
      }
    ); 
    if(response.data.errorCode === 0){
      this.props.onSetSpaceList(response.data.data.space_list) 
    }
  }
 
  render() { 
    return (
      <Grid> 
        <Grid container justify="space-between" style={{ backgroundColor: "#5b6eb9", padding: "10px 0" }}>
          <Typography style={{ color: "#FAFAFA", paddingLeft: 10, fontSize: 18 }}>Hello world website</Typography>
          <Typography style={{ color: "#FAFAFA", paddingRight: 10, fontSize: 16 }}>Logout</Typography>
        </Grid> 
        <Grid style={{ margin: "100px 200px" }}>
          <Typography><span style={{ color: "#EB5757" }}>{this.props.space_list && this.props.space_list.space_list.length}</span> listings found</Typography>
          <Grid container>
            {this.props.space_list && this.props.space_list.space_list.map((item, index) => {
              return (
                <Grid item lg={2} md={3} sm={6}  key={index} style={{ padding: "10px 2px", backgroundColor: "#FFFFFF" }}>
                  <img alt="img" src={item.space_thumb_image} style={{ width: "100%", height: 150 }} />
                  <Typography>{item.district_name}</Typography>
                  <Typography style={{fontSize: 12, color: "#444444" }}>{item.type_name}</Typography>

                  <Typography style={{ marginTop: 20 }}><b>${item.base_price}</b> / day</Typography>
                </Grid>
              );
            })} 
          </Grid>
        </Grid>
      </Grid> 
    );
  }
} 

const mapStateToProps = state => {
  return {
    state,
    space_list: state.space_list
  };
};

const mapDispatchToProps = dispatch => ({
  onSetSpaceList: (space_list) => dispatch(setSpaceList({space_list})), 
}); 


export default withRouter(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Home))); 
