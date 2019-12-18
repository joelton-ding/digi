import React from 'react'
import PropTypes from 'prop-types'
import SwipeableViews from 'react-swipeable-views'
import { useTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Fade from 'react-reveal/Fade'
import PdfPersonal from '../../../../misc/PersonalAccount_ApplicationFormDGB.pdf'
import PdfCorporate from '../../../../misc/CorporateAccount_ApplicationFormDGB.pdf'


import styles from './style.module.scss'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}



export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <Fade left>
    <div id="account" className={`${styles.content} tabs-regsiter`}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="Person &amp; Corporate"
        >
          <Tab icon={
            <svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Desktop-HD-1920px" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="05-OpenAccount_Personal" className="user" transform="translate(-678.000000, -817.000000)" fill="#93B5CF" fillRule="nonzero">
                      <g id="P&amp;SPart2_MulticurrencyAccounts" transform="translate(0.000000, 648.000000)">
                          <g id="Group-8" transform="translate(487.000000, 120.000000)">
                              <g id="Account-Type" transform="translate(98.000000, 0.000000)">
                                  <g id="Personal" transform="translate(93.000000, 49.000000)">
                                      <g id="Shape">
                                          <g id="BasicAccount-01">
                                              <path d="M0,29.3671875 C0,23.1484375 0,16.921875 0,10.703125 C0.1640625,9.90625 0.28125,9.09375 0.5078125,8.3125 C1.140625,6.1171875 2.515625,4.3984375 4.1796875,2.8984375 C6.2421875,1.0390625 8.65625,0.0234375 11.4375,0.015625 C17.1484375,1.3782378e-15 22.8671875,0.0078125 28.578125,0.015625 C29.734375,0.015625 30.859375,0.21875 31.9453125,0.5859375 C33.828125,1.2265625 35.3515625,2.3828125 36.7265625,3.7890625 C38.8671875,5.984375 39.984375,8.5859375 39.9921875,11.6484375 C40,17.2265625 40.0078125,22.8125 39.984375,28.390625 C39.984375,29.21875 39.8828125,30.0546875 39.7109375,30.8671875 C39.046875,33.9296875 37.140625,36.15625 34.7109375,37.984375 C33.671875,38.765625 32.5,39.3046875 31.234375,39.609375 C30.59375,39.765625 29.9375,39.8671875 29.2890625,39.9921875 C23.09375,39.9921875 16.8984375,39.9921875 10.6953125,39.9921875 C9.8828125,39.8203125 9.0625,39.703125 8.265625,39.46875 C5.8046875,38.7421875 3.953125,37.1328125 2.3671875,35.1953125 C1.390625,34.0078125 0.7109375,32.65625 0.3359375,31.15625 C0.203125,30.5703125 0.1171875,29.9609375 0,29.3671875 Z M13.6171875,25.6171875 C10.9375,23.53125 9.421875,20.84375 9.2421875,17.5 C9.0625,14.1484375 10.2421875,11.296875 12.703125,9.0078125 C17.0390625,4.9609375 23.84375,5.2421875 27.8984375,9.59375 C32.125,14.1328125 31.75,21.5625 26.3984375,25.6171875 C30.1875,26.9296875 33.3125,29.1640625 35.8046875,32.3203125 C36.53125,31.078125 36.8671875,29.7734375 36.8671875,28.3828125 C36.8671875,22.7734375 36.875,17.1640625 36.859375,11.5546875 C36.859375,10.875 36.734375,10.1796875 36.578125,9.515625 C36.15625,7.71875 35,6.3828125 33.671875,5.171875 C32.1640625,3.8046875 30.3828125,3.125 28.34375,3.125 C22.78125,3.125 17.2265625,3.1171875 11.6640625,3.140625 C10.9453125,3.140625 10.203125,3.2265625 9.5078125,3.421875 C7.109375,4.0859375 5.4375,5.703125 4.1484375,7.75 C3.4765625,8.8125 3.140625,10.015625 3.140625,11.2734375 C3.125,17.09375 3.125,22.90625 3.140625,28.7265625 C3.1484375,29.9921875 3.515625,31.1875 4.1875,32.3203125 C6.6796875,29.171875 9.796875,26.9453125 13.6171875,25.6171875 Z M33.7421875,34.7421875 C30.0234375,29.8984375 25.1796875,27.453125 19.0859375,27.75 C13.71875,28.0078125 9.4765625,30.4609375 6.25,34.7578125 C7.8125,36.171875 9.5859375,36.859375 11.625,36.859375 C17.1953125,36.8671875 22.765625,36.8671875 28.3359375,36.8515625 C28.875,36.8515625 29.4296875,36.796875 29.9609375,36.6953125 C31.390625,36.4296875 32.6328125,35.78125 33.7421875,34.7421875 Z M20,9.28125 C15.78125,9.28125 12.3437368,12.703125 12.3437368,16.9140625 C12.3359375,21.1328125 15.796875,24.6015625 20.015625,24.5859901 C24.21875,24.5703125 27.65625,21.125 27.65625,16.921875 C27.6484375,12.703125 24.2265625,9.28125 20,9.28125 Z" id="Personal"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
            </svg>
          } label="Personal" {...a11yProps(0)} />
          <Tab icon={
            <svg width="43px" height="40px" viewBox="0 0 43 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g id="Desktop-HD-1920px" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="05-OpenAccount_Corporate" className="corporate"  transform="translate(-1041.000000, -817.000000)" fill="#93B5CF" fillRule="nonzero">
                      <g id="P&amp;SPart2_MulticurrencyAccounts" transform="translate(0.000000, 648.000000)">
                          <g id="Group-8" transform="translate(487.000000, 120.000000)">
                              <g id="Account-Type" transform="translate(98.000000, 0.000000)">
                                  <g id="Corporate" transform="translate(456.000000, 49.000000)">
                                      <g id="Shape" transform="translate(-0.000000, 0.000000)">
                                          <g id="BasicAccount-01">
                                              <path d="M14.6761474,14.789916 C15.5972424,14.789916 16.3438914,15.5423529 16.3438914,16.4705882 L16.3438914,16.4705882 L16.3438914,29.9159664 C16.3438914,30.8442017 15.5972424,31.5966387 14.6761474,31.5966387 C13.7550524,31.5966387 13.0084034,30.8442017 13.0084034,29.9159664 L13.0084034,29.9159664 L13.0084034,16.4705882 C13.0084034,15.5423529 13.7550524,14.789916 14.6761474,14.789916 Z M28.0180995,14.789916 C28.9391946,14.789916 29.6858436,15.5423529 29.6858436,16.4705882 L29.6858436,16.4705882 L29.6858436,29.9159664 C29.6858436,30.8442017 28.9391946,31.5966387 28.0180995,31.5966387 C27.0970045,31.5966387 26.3503555,30.8442017 26.3503555,29.9159664 L26.3503555,29.9159664 L26.3503555,16.4705882 C26.3503555,15.5423529 27.0970045,14.789916 28.0180995,14.789916 Z M41.0265029,6.38655462 L29.6858436,6.38655462 L29.6858436,1.68067227 C29.6858436,0.752436975 28.9391946,0 28.0180995,0 L14.6761474,0 C13.7550524,0 13.0084034,0.752436975 13.0084034,1.68067227 L13.0084034,6.38655462 L1.66774402,6.38655462 C0.746648998,6.38655462 0,7.1389916 0,8.06722689 L0,38.3193277 C0,39.247563 0.746648998,40 1.66774402,40 L41.0265029,40 C41.9475979,40 42.6942469,39.247563 42.6942469,38.3193277 L42.6942469,8.06722689 C42.6942469,7.1389916 41.9475979,6.38655462 41.0265029,6.38655462 Z M16.3438914,3.36134454 L26.3503555,3.36134454 L26.3503555,6.38655462 L16.3438914,6.38655462 L16.3438914,3.36134454 Z M39.3587589,36.6386555 L3.33548804,36.6386555 L3.33548804,9.74789916 C4.27417776,9.74789916 38.4193187,9.74789916 39.3587589,9.74789916 L39.3587589,36.6386555 Z" id="Corporate"></path>
                                          </g>
                                      </g>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </g>
              </g>
          </svg>
          } label="Corporate" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <div className={styles.content_register}>
            <h2>Download &amp; collect the list of documents needed to open the personal account.</h2>
          </div>  
          <ul className={styles.register_list}>
            <li><span /> Digi Bank Personal Account Application Form</li>
            <li><span /> Colored copy of passport(s) (certified by lawyer or notary)</li>
            <li><span /> Colored copy of other valid ID such as National ID card or driver’s license (certified by lawyer or notary)</li>
            <li><span /> Original bank reference letter indicating the length of relationship (recommended minimum of 3 years relationship)</li>
            <li><span /> Proof of address (eg. Title deed, lease agreement, utility bill, bank statement)</li>
          </ul>
          <h3>In the case of Authorized Person, provide as well:</h3>
          <ul className={styles.register_list}>
            <li><span /> Original Power of Attorney (certified by lawyer or notary)</li>
            <li><span /> Colored copy of passport(s) (certified by lawyer or notary)</li>
            <li><span /> Colored copy of other valid ID such as national ID card or driver’s license (certified by lawyer or notary)</li>
            <li><span /> Original bank reference letter indicating the length of relationship (recommended minimum of 3 years relationship)</li>
            <li><span /> Proof of address (eg. Title deed, lease agreement, utility bill, bank statement)</li>
          </ul>

            <button className={`${styles.button_default} `}>
              <a href={PdfPersonal} className="hvr-sweep-to-right" target="_blank" rel="noopener noreferrer">DOWNLOAD APPLICATION FORM</a>
          </button>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
        <div className={styles.content_register}>
            <h2>Download &amp; collect the list of documents needed to open the corporate account.</h2> 
          </div>  
          <ul className={styles.register_list}>
            <li><span /> Digi Bank Corporate Account Application Form</li>
            <li><span /> Certified/notarized Copy of Certificate of Registration</li>
            <li><span /> Certificate/notarized Copy of Good Standing (for entities greater than 1 year old in operation)</li>
            <li><span /> Certified/notarized Copy of Share Certificates</li>
            <li><span /> Certified/notarized Copy of Register of Directors/Appointment of Directors</li>
            <li><span /> Certified/notarized Copy of Memorandum/Articles of Association</li>
          </ul>
          <h3>Required for Authorized Person(s):</h3>
          <ul className={styles.register_list}>
            <li><span /> Original Power of Attorney (certified/notarized by lawyer or notary)</li>
            <li><span /> Colored copy of passport(s) (certified by lawyer or notary) for all Director(s)/Shareholder(s)</li>
            <li><span /> Colored copy of other valid ID such as national ID card or driver’s license (certified/notarised by lawyer or notary) for all Director(s)/Shareholder(s)</li>
            <li><span /> Original bank reference letter indicating the length of relationship (recommended minimum of 3 years relationship) for all Director(s)/Shareholder(s)</li>
            <li><span /> Proof of address (e.g. title deed, lease agreement, utility bill, bank statement) for all Director(s)/Shareholder(s)</li>
          </ul>
          <button className={styles.button_default}>
              <a href={PdfCorporate} className="hvr-sweep-to-right" target="_blank" rel="noopener noreferrer">DOWNLOAD APPLICATION FORM</a>
          </button>
        </TabPanel>
      </SwipeableViews>
      <br /><br />
      </div>
      </Fade>
  );
}