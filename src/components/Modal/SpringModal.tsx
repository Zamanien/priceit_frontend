import * as React from "react";
import { Modal, Button, Box, Stack, Backdrop } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";
import { Login } from "../Users/Login/Login";
import { Register } from "../Users/Register/Register";
import { User } from "../../types";
interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default function SpringModal() {
  const [open, setOpen] = React.useState(false);
  const [openRegister, setOpenRegister] = React.useState(false);
  const [openLogin, setOpenLogin] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenRegister = () => {
    setOpenRegister(true);
    setOpen(false);
  };
  const handleOpenLogin = () => {
    setOpenLogin(true);
    setOpen(false);
  };
  const handleClose = () => setOpen(false);
  const handleCloseRegister = () => setOpenRegister(false);
  const handleCloseLogin = () => setOpenLogin(false);
  return (
    <div>
      <Button color="info" variant="contained" onClick={handleOpen}>
        Register / Login
      </Button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack spacing={2} sx={{ maxWidth: 400, m: "auto" }}>
              <Button
                color="info"
                variant="contained"
                fullWidth
                type="button"
                onClick={handleOpenRegister}
              >
                Register
              </Button>
              <Button
                color="info"
                variant="contained"
                fullWidth
                type="button"
                onClick={handleOpenLogin}
              >
                Log In
              </Button>
            </Stack>
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openRegister}
        onClose={handleCloseRegister}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openRegister}>
          <Box sx={style}>
            <Register />
          </Box>
        </Fade>
      </Modal>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={openLogin}
        onClose={handleCloseLogin}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openLogin}>
          <Box sx={style}>
            <Login />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
