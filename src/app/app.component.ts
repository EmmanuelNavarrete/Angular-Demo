import { Component } from "@angular/core";

type Movie = {
  name: String;
  available: Number;
  boletos: Number;
};
type Movies = Array<Movie>;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  title: String = "Peliculas";
  movies: Movies = [
    {
      name: "Terminator",
      available: 6,
      boletos: 0
    },
    {
      name: "La casa de lola",
      available: 3,
      boletos: 0
    }
  ];
  addMovieBoleto(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].boletos += 1)];
  }
  removeMovieBoleto(movieName) {
    const movieIndex = this.movies.findIndex(
      (movie) => movie.name === movieName
    );

    this.movies[movieIndex].boletos -= 1)];
  }
}
