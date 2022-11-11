import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import "./card.css"
const CardMovie = ({ movies }) => {

    return(
    <Grid container spacing={2} sx={{ padding: 3 }}>
      {movies.map((item, index) => (
        <Grid item xs={12} sm={3} key={index}>
          <Card sx={{ maxWidth: 345, Height:500, background:"black", color:"white" }} key={index} xs={8}>
            <CardMedia
              component="img"
              height="240"
              image={item.images.posterArt.url}
              alt="green iguana"
              className="hav"
            />
            <div className="hov">
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                    {item.releaseYear}
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                    {item.description}
                    </Typography>
                </CardContent>
            </div>
          </Card>
        </Grid>
      ))}
      
    </Grid>
    )
}

export default CardMovie