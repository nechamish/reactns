// import * as React from "react";
// // import Button from "@mui/material/Button";
// // import CssBaseline from "@mui/material/CssBaseline";
// // import TextField from "@mui/material/TextField";
// // import FormControlLabel from "@mui/material/FormControlLabel";
// // import Checkbox from "@mui/material/Checkbox";
// // import Grid from "@mui/material/Grid";
// // import Box from "@mui/material/Box";
// // import Typography from "@mui/material/Typography";
// // import Container from "@mui/material/Container";
// // import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// // import AppBar from "@mui/material/AppBar";
// // import Toolbar from "@mui/material/Toolbar";
// // import IconButton from "@mui/material/IconButton";
// // import { connect } from "react-redux";
// export default function SignIn() {
//     const [password, setPassword] = useState();
//     let navigate = useNavigate();

//     const sendToDb = async () => {
//       console.log(password);
//       const promise = axios.post("https://meetings-test.herokuapp.com/user/signin", {
//         Password: password,
//       });
//       const res = await promise;
//       console.log(res.data);
//       debugger;
//       return res.data;
//     };
//     const handleSubmit = async (event) => {
//       event.preventDefault();
//       const data = new FormData(event.currentTarget);
//       if (parseInt(data.get("password")) === 100) {
//         console.log("manager");
//         return navigate("/Manager");
//        }
//           //אם הוא עובד קיים
//           const user = await sendToDb();
//           // console.log(user);
//           if (user.userid) {
//             console.log("i am user");
//             navigate("/User", { state: { user } });
//           }
//         }
   
//     // let theme = createTheme();
//     // theme = createTheme(theme, {
//     //   palette: {
//     //     primary: {
//     //       main: "#ec5990",
//     //       light: "#ec5990",
//     //       dark: "#ec5990",
//     //     },
//     //   },
//     // });
//     return (
//         <><h1>hkjhnklm</h1></>
//     //   <ThemeProvider theme={theme}>
//     //     <Box sx={{ flexGrow: 1 }}>
//     //       <AppBar position="static" className="btn">
//     //         <Toolbar>
//     //           <IconButton
//     //             size="large"
//     //             edge="start"
//     //             aria-label="menu"
//     //             sx={{ mr: 2 }}
//     //           >
//     //             {/* <MenuIcon /> */}
//     //           </IconButton>
//     //           <Typography
//     //             // color="pink"
//     //             variant="h6"
//     //             component="div"
//     //             sx={{ flexGrow: 1 }}
//     //           >
//     //             פרויקט לב אחד
//     //           </Typography>
//     //         </Toolbar>
//     //       </AppBar>
  
//     //       <Container component="main" maxWidth="xs">
//     //         <CssBaseline />
//     //         <Box
//     //           sx={{
//     //             marginTop: 8,
//     //             display: "flex",
//     //             flexDirection: "column",
//     //             alignItems: "center",
//     //           }}
//     //         >
            
//     //           <Typography component="h1" variant="h5">
//     //             התחבר
//     //           </Typography>
//     //           <Box
//     //             component="form"
//     //             onSubmit={handleSubmit}
//     //             noValidate
//     //             sx={{ mt: 1 }}
//     //           >
//     //             <TextField
//     //               margin="normal"
//     //               required
//     //               fullWidth
//     //               name="password"
//     //               label="Password"
//     //               type="password"
//     //               id="password" 
//     //               autoComplete="current-password"
//     //               onChange={(e) => {
//     //                 setPassword(e.target.value);
  
//     //                 console.log(password);
//     //               }}
//     //             />
//     //             <Button
//     //               type="submit"
//     //               fullWidth
//     //               variant="contained"
//     //               sx={{ mt: 3, mb: 2 }}
//     //             >
//     //               כניסה
//     //             </Button>
//     //             <Grid container>
//     //               <Grid item xs>
//     //               </Grid>
//     //               <Button
//     //                 className="btn"
//     //                 type="submit"
//     //                 fullWidth
//     //                 variant="contained"
//     //                 sx={{ mt: 3, mb: 2 }}
//     //               >
//     //                 <Grid item>
//     //                   <Link to="/Manager">{"Don't have an account? vulenteer"}</Link>
//     //                 </Grid>
//     //               </Button>
//     //               <Button
//     //                 className="btn"
//     //                 type="submit"
//     //                 fullWidth
//     //                 variant="contained"
//     //                 sx={{ mt: 3, mb: 2 }}
//     //               >
//     //                 <Grid item>
//     //                   {/* <Link to="/Sickform">{"Don't have an account? sick"}</Link> */}
//     //                 </Grid>
//     //               </Button>
//     //             </Grid>
//     //           </Box>
//     //         </Box>
//     //         {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
//     //       </Container>
//     //     </Box>
//     //   </ThemeProvider>
//     );
//  };
// //   export default connect(null, mapDispatchToProps)(SignIn);