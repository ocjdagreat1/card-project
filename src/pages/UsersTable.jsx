import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

const UsersList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const api =  `${import.meta.env.VITE_API_URL}/api/auth/`;

  useEffect(() => {
    const getUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(api);
        setUsers(res.data);
      } catch (error) {
        console.error(error);
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, []);

  const deleteUser = async (_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/api/auth/delete/${_id}`
      );
      setUsers(users.filter((user) => user._id !== _id));
    } catch (error) {
      console.error(error);
      alert("Failed to delete user");
    }
  };

  if (loading)
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 50%, #d1d5db 100%)",
        }}
      >
        <Stack alignItems="center" spacing={2}>
          <CircularProgress size={60} thickness={5} color="primary" />
          <Typography variant="h6" color="text.secondary">
            Loading users...
          </Typography>
        </Stack>
      </Box>
    );

  return (
    <>
      <Box
        sx={{
          Height: "100vh",
          background: "linear-gradient(135deg, #f0f4ff 0%, #fefefe 100%)",
          py: 3,
          px: { xs: 2, sm: 6 },
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: { xs: 2, sm: 4 },
            borderRadius: 4,
            backgroundColor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#1e40af", fontSize: { xs: "1.6rem", sm: "2rem" } }}
          >
            Registered Users
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            mb={3}
            sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
          >
            View and manage all user accounts in the system.
          </Typography>

          
          <TableContainer
            sx={{
              overflowX: "auto",
              borderRadius: 2,
              "&::-webkit-scrollbar": {
                height: 8,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#90a4ae",
                borderRadius: 4,
              },
            }}
          >
            <Table sx={{ minWidth: 800 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#1e3a8a" }}>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>ID</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Name</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Email</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Phone</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }}>Address</TableCell>
                  <TableCell sx={{ color: "white", fontWeight: "bold" }} align="center">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {users.length > 0 ? (
                  users.map((user, index) => (
                    <TableRow
                      key={user._id}
                      sx={{
                        backgroundColor: index % 2 === 0 ? "#f9fafb" : "white",
                        "&:hover": {
                          backgroundColor: "#e0f2fe",
                          transition: "0.3s",
                        },
                      }}
                    >
                      <TableCell sx={{ whiteSpace: "nowrap" }}>{user._id}</TableCell>
                      <TableCell>
                        {user.firstName} {user.lastName}
                      </TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.phoneNumber}</TableCell>
                      <TableCell>{user.address}</TableCell>
                      <TableCell align="center">
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={1}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Button
                            variant="contained"
                            color="success"
                            size="small"
                            onClick={() => navigate(`/users/${user._id}`)}
                            sx={{ minWidth: 70 }}
                          >
                            View
                          </Button>

                          <Button
                            variant="contained"
                            color="primary"
                            size="small"
                          onClick={() => navigate(`/users/edit/${user._id}`)}
                            sx={{ minWidth: 70 }}
                          >
                            Edit
                          </Button>

                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            onClick={() => deleteUser(user._id)}
                            sx={{ minWidth: 70 }}
                          >
                            Delete
                          </Button>
                        </Stack>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      <Typography color="text.secondary">No users found</Typography>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>

      <Footer />
    </>
  );
};

export default UsersList;
