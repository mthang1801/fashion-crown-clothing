import React from 'react'
import MenuItem from "../menu-item/menu-item.component";
import "./directory-menu.styles.scss";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";
class Directory extends React.Component{
 
  render(){
    return(
      <div className="directory-menu">
        {this.props.sections.map( ({id, ...rest}) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
})

export default connect(mapStateToProps)(Directory);