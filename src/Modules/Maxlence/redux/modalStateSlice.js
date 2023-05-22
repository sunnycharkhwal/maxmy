import { createSlice } from "@reduxjs/toolkit";

const modalStateSlice = createSlice({
  name: "modal",
  initialState: {
    showLoginModal: false,
    showSignUpModal: false,
    showMenuModal: false,

    showForgotModal: false,
    showCheckYourEmailModal: false,
    showPasswordResetModal: false,
    showNewPasswordModal: false,

    user: {},
  },
  reducers: {
    setShowLoginModal: (state) => {
      state.showLoginModal = !state.showLoginModal;
    },
    setShowSignUpModal: (state) => {
      state.showSignUpModal = !state.showSignUpModal;
    },
    setShowMenuModal: (state) => {
      state.showMenuModal = !state.showMenuModal;
    },

    setShowForgotModal: (state) => {
      state.showForgotModal = !state.showForgotModal;
    },
    setShowCheckYourEmailModal: (state) => {
      state.showCheckYourEmailModal = !state.showCheckYourEmailModal;
    },
    setShowPasswordResetModal: (state) => {
      state.showPasswordResetModal = !state.showPasswordResetModal;
    },
    setNewPasswordModal: (state) => {
      state.showNewPasswordModal = !state.showNewPasswordModal;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    resetUser: (state) => {
      state.user = {};
    },
  },
});

export const {
  setShowLoginModal,
  setShowSignUpModal,
  setShowMenuModal,
  setShowForgotModal,
  setShowCheckYourEmailModal,
  setShowPasswordResetModal,
  setNewPasswordModal,
  setUser,
  resetUser,
} = modalStateSlice.actions;
export default modalStateSlice.reducer;