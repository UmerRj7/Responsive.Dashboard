import React from 'react'
import './files/home.css'


function Home() {
  return (
    <>
      <div className="container-body">
        <div className="sideBar-left">
            <div id="mySidenav" class="sidenav">
            
              <a href="/" id="about"><text id='tiny'>Dashboard</text> &nbsp;&nbsp;&nbsp;<i class='fa fa-tv'></i></a>
              <a href="/" id="blog"><text id='tiny'>Message</text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i  class='fas fa-comments-dollar'></i></a>
              <a href="/" id="projects"><text id='tiny'>Buyer Persona</text>&nbsp;&nbsp;<i class='fa fa-crosshairs'></i></a>
              <a href="/" id="contact"><text id='tiny'>My Profile</text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class='fa fa-cog'></i></a>
            </div>
        </div>
        <div className="main-div">
        <div className="calender">
          <div className="my-box">
            <div className="upBox" ><text id='cal-text'>2019</text></div>
            <div className="downBox"><text id='cal-text'>12 Dec</text></div><text id='cal-text2'>ALBERTA, CA</text>
          </div>
        </div>
          <div className="flat-divs">
            <div className="box">
              <div className='sub-box'>
              <i class='fa fa-group'></i>
              </div>
              <div className='sub-box2'>
                <h1>38</h1>
              </div>
            </div>
            <div className="box">
              <div className='sub-box'>
              <i class="fa fa-male"></i>
              <i id='female' class='fa fa-female'></i>
              </div>
              <div className='sub-box2'><h1>59/125</h1></div>
            </div>
            <div className="box">
              <div className='sub-box'>
                <i class='fa fa-hourglass-half'></i>
                </div>
              <div className='sub-box2'><h1>87</h1></div>
            </div>
            <div className="box4">
              <div className='sub-box'>
              <i class='fas fa-stopwatch'></i> 
            </div>
              <div className='sub-box2'><h1>43</h1></div>
            </div>
          </div>
          <div className="top-div">
            <div className="emoji"><h6 id="t-head">Analysis</h6>
            <i class='fas fa-grin-wink' id='icon2'></i>
            <i class='fas fa-meh' id='icon3'></i>
            <i class='fas fa-frown' id='icon'></i>
            </div>
            <div className='img-div'><img id="img" src={process.env.PUBLIC_URL + '/assets/images/graph.PNG'} alt="Girl in a jacket" width="500" height="600" /></div>
            <div className='cylion' >
              <span id='top-cylinder' className='cylinder'><text id='small-txt'>Amount of visitors</text></span>
              <span className='cylinder'><text id='small-txt'>male vs female</text></span>
              <span id='cylinder-3' className='cylinder'><text id='small-txt'>avg.age</text></span>
              <span className='cylinder'><text id='small-txt'>avg.time</text></span>
            </div>

          </div>
          {/* <div className="panel">
            <div className="panel-box" id='small-txt2'><p id='t1'>MY PROFILE</p><p>MY PANEL</p><p>SECURITY</p><p>LOG OUT</p></div>
            </div> */}
          <div className="middle-div">
            <div className="face-class">
              <div className='face1'><h6 id="t-head2">Male vs Female</h6>
              <i id='icon2' class="fa fa-female"></i>
              <i id='icon3' class="fa fa-male"></i>
              <span class="dot">3:05</span>
              <span class='border'></span>
              </div>
              <div className='face2'>
                <text id='text'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40% &nbsp;45%</text>
              </div>
            </div>
            <table className='table-01'>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Savings</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Joe</td>
                <td>Swanson</td>
                <td>$300</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>

            </table>
          </div>
          <div className="bottom-div">
            <table className='table-01'>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Savings</th>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Savings</th>
              </tr>
              <tr>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Lois</td>
                <td>Griffin</td>
                <td>$150</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Joe</td>
                <td>Swanson</td>
                <td>$300</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>Cleveland</td>
                <td>Brown</td>
                <td>$250</td>
                <td>Peter</td>
                <td>Griffin</td>
                <td>$100</td>
              </tr>

            </table>
            <img id="img-2" src={process.env.PUBLIC_URL + '/assets/images/curl.PNG'} alt="Girl in a jacket" width="500" height="600" />
          </div>
        </div>
      </div>
      <h1 id='last'>aqomi</h1>
    </>
  )
}

export default Home