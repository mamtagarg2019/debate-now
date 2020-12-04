
import { connect } from 'react-redux';
import { commonAction } from './actions/common';
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App(props) {
  return (
    <div className="wrapper">
		  <div className="header-wrap">
		    <div className="container">
        <Header/>
          {props.children}
        </div>
      </div>
      <Footer/>
    </div>
  );
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = dispatch => ({
  commonAction: () => dispatch(commonAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
