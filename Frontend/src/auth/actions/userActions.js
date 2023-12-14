import axios from "axios";
import { sessionService } from "redux-react-session";

export const loginAdmin = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/user/signin", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          } else if (message.toLowerCase().includes("email")) {
            setFieldError("email", message);
          }
        } else if (data.status === "Success") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  navigate("/admin/dashboard");
                })
                .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };
};

export const loginAdopter = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/adopter/signin", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          } else if (message.toLowerCase().includes("email")) {
            setFieldError("email", message);
          }
        } else if (data.status === "Success") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  navigate("/adopter/dashboard");
                })
                .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };
};

export const loginEmployee = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/employee/signin", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("credentials")) {
            setFieldError("email", message);
            setFieldError("password", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          } else if (message.toLowerCase().includes("email")) {
            setFieldError("email", message);
          }
        } else if (data.status === "Success") {
          const userData = data.data[0];

          const token = userData._id;

          sessionService
            .saveSession(token)
            .then(() => {
              sessionService
                .saveUser(userData)
                .then(() => {
                  navigate("/employee/dashboard");
                })
                .catch((error) => console.error(error));
            })
            .catch((error) => console.error(error));
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };
};

export const signupAdopter = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/adopter/signup", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("first name")) {
            setFieldError("firtName", message);
          } else if (message.includes("last name")) {
            setFieldError("lastName", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("password")) {
            setFieldError("password", message);
          } else if (message.includes("date")) {
            setFieldError("dateofbirth", message);
          }
          setSubmitting(false);
        } else if (data.status === "Pending") {
          const { email } = credentials;
          navigate(`/emailsent/${email}`);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };
};

export const logout = (navigate) => {
  return () => {
    sessionService
      .deleteSession()
      .then(() => {
        sessionService
          .deleteUser()
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.error(err));
      })
      .catch((err) => console.error(err));
  };
};

export const forgottenAdminPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/user/requestPasswordReset", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (
            message.toLowerCase().includes("email") ||
            message.toLowerCase().includes("password") ||
            message.toLowerCase().includes("user")
          ) {
            setFieldError("email", message);
          }
        } else if (data.status === "Pending") {
          const { email } = credentials;
          navigate(`/emailsent/${email}/${true}`);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };
};
export const forgottenAdopterPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/adopter/requestPasswordReset", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (
            message.toLowerCase().includes("email") ||
            message.toLowerCase().includes("password") ||
            message.toLowerCase().includes("user")
          ) {
            setFieldError("email", message);
          }
        } else if (data.status === "Pending") {
          const { email } = credentials;
          navigate(`/emailsent/${email}/${true}`);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };
};
export const forgottenEmployeePassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post(
        "http://localhost:5000/employee/requestPasswordReset",
        credentials,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (
            message.toLowerCase().includes("email") ||
            message.toLowerCase().includes("password") ||
            message.toLowerCase().includes("user")
          ) {
            setFieldError("email", message);
          }
        } else if (data.status === "Pending") {
          const { email } = credentials;
          navigate(`/emailsent/${email}/${true}`);
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };
};

export const resetAdopterPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/adopter/resetPassword", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.toLowerCase().includes("password")) {
            setFieldError("newPassword", message);
          }
        } else if (data.status === "Success") {
          navigate("/emailsent");
        }
        setSubmitting(false);
      })
      .catch((error) => console.error(error));
  };
};

export const resetEmployeePassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/employee/resetPassword", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.toLowerCase().includes("password")) {
            setFieldError("newPassword", message);
          }
        } else if (data.status === "Success") {
          navigate("/emailsent");
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const resetAdminPassword = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return () => {
    axios
      .post("http://localhost:5000/user/resetPassword", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.toLowerCase().includes("password")) {
            setFieldError("newPassword", message);
          }
        } else if (data.status === "Success") {
          navigate("/emailsent");
        }
        setSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setSubmitting(false);
      });
  };
};

export const registerEmployee = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/user/registerEmployee", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("first name")) {
            setFieldError("firtName", message);
          } else if (message.includes("last name")) {
            setFieldError("lastName", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          }
          setSubmitting(false);
        } else if (data.status === "Pending") {
          const { email } = credentials;
          navigate(`/emailsent/${email}`);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };
};

export const registerChild = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/employee/registerChild", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("first name")) {
            setFieldError("firtName", message);
          } else if (message.includes("last name")) {
            setFieldError("lastName", message);
          } else if (message.includes("date")) {
            setFieldError("dateofbirth", message);
          }
          setSubmitting(false);
        } else if (data.status === "Success") {
          navigate(`/employee/children`);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };
};

export const submitadoption = (
  credentials,
  navigate,
  setFieldError,
  setSubmitting
) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/adoption/stage1", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("full name")) {
            setFieldError("fullName", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("address")) {
            setFieldError("address", message);
          } else if (message.includes("phone")) {
            setFieldError("phone", message);
          } else if (message.includes("marital")) {
            setFieldError("maritalstatus", message);
          } else if (message.includes("arrest")) {
            setFieldError("criminararrest", message);
          } else if (message.includes("report")) {
            setFieldError("criminalreport", message);
          }
          setSubmitting(false);
        } else if (data.status === "Success") {
          const { email } = credentials;
          navigate(`/adopter/${email}`);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };
};

export const approveApplication = (application, navigate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/employee/approveApplication", application, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Success") {
          navigate(`/employee/applicationApproved`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const declineApplication = (application, navigate) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/employee/declineApplication", application, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.status === "Success") {
          navigate(`/employee/applicationDeclined`);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const donate = (credentials, navigate, setFieldError, setSubmitting) => {
  return (dispatch) => {
    axios
      .post("http://localhost:5000/donation/donate", credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const { data } = response;

        if (data.status === "Failed") {
          const { message } = data;

          if (message.includes("first name")) {
            setFieldError("firtName", message);
          } else if (message.includes("last name")) {
            setFieldError("lastName", message);
          } else if (message.includes("email")) {
            setFieldError("email", message);
          } else if (message.includes("phone")) {
            setFieldError("phone", message);
          } else if (message.includes("date")) {
            setFieldError("dateofbirth", message);
          } else if (message.includes("address")) {
            setFieldError("address", message);
          }
          setSubmitting(false);
        } else if (data.status === "Success") {
          navigate(`/`);
        }
      })
      .catch((error) => {
        console.log(error);
        setSubmitting(false);
      });
  };
};
