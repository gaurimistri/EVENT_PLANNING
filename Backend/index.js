import app from './api/app.js'; 
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
});
