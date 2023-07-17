import React from "react";
import { IBook } from "../../../types/globalTypes";
import RecentBookCard from "../RecentBookCard/RectntBookCard";

const RecentBookData: IBook[] = [
  {
    id: "1",
    title: "The Shawshank Redemption",
    description:
      "A gripping tale of hope and friendship in the face of adversity. Andy Dufresne, a banker, is sentenced to life in Shawshank State Penitentiary for a crime he didn't commit. In the midst of the harsh prison life, he forms an unlikely bond with Red, a fellow inmate.",
    author: "Frank Darabont",
    genre: "Drama",
    publicationYear: "1994",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689619443/BookHub/Books/To_Kill_a_Mockingbird_ulxnbo.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "This is a great movie",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "This is a great movie",
      },
    ],
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    description:
      "Set in the 1930s, this novel explores racial injustice and the loss of innocence through the eyes of Scout Finch, a young girl growing up in a small Southern town. Scout's father, Atticus Finch, defends a black man falsely accused of rape, challenging the deeply rooted prejudices of the community.",
    author: "Harper Lee",
    genre: "Fiction",
    publicationYear: "1960",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689619442/BookHub/Books/The_Shawshank_Redemption_dfxaba.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "A classic that everyone should read.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "The prose in this book is stunning.",
      },
    ],
  },
  {
    id: "3",
    title: "1984",
    description:
      "In a dystopian society, Winston Smith rebels against the totalitarian regime of Big Brother. As he navigates a world of constant surveillance and propaganda, Winston begins to question the nature of truth and freedom.",
    author: "George Orwell",
    genre: "Dystopian",
    publicationYear: "1949",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689619443/BookHub/Books/Dystopian_gyipo0.png",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "This book makes you question the nature of power and control.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "Everyone should read this book to understand the dangers of totalitarianism.",
      },
    ],
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    description:
      "Jane Austen's beloved novel follows the story of Elizabeth Bennet as she navigates the societal expectations and romantic entanglements of 19th-century England. The book explores themes of love, class, and the consequences of hasty judgments.",
    author: "Jane Austen",
    genre: "Romance",
    publicationYear: "1813",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689619782/BookHub/Books/Pride_and_Prejudice_k2hcd5.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "A delightful love story that stands the test of time.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "Jane Austen's writing is witty and her characters are lovable.",
      },
    ],
  },
  {
    id: "5",
    title: "The Great Gatsby",
    description:
      "Set in the roaring 1920s, F. Scott Fitzgerald's masterpiece explores the decadence, illusions, and underlying corruption of the American Dream. Jay Gatsby, a mysterious millionaire, throws lavish parties in the hopes of winning back his lost love, Daisy Buchanan.",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    publicationYear: "1925",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689619780/BookHub/Books/The_Great_Gatsby_cs4bvt.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "Fitzgerald's writing transports you to the lavish world of the 1920s.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "The imagery in this book is stunning.",
      },
    ],
  },
  {
    id: "6",
    title: "The Catcher in the Rye",
    description:
      "Holden Caulfield, a disenchanted teenager, recounts his experiences in New York City after being expelled from school. J.D. Salinger's novel explores themes of alienation, identity, and the struggles of adolescence.",
    author: "J.D. Salinger",
    genre: "Fiction",
    publicationYear: "1951",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689619781/BookHub/Books/The_Catcher_in_the_Rye_nbftby.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "Holden Caulfield's voice resonates with readers of all generations.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "This book has had a profound impact on many readers' lives.",
      },
    ],
  },
  {
    id: "7",
    title: "To the Lighthouse",
    description:
      "Virginia Woolf's experimental novel delves into the thoughts and perspectives of its characters as they spend a summer at their family's vacation home. The book explores themes of art, feminism, and the passage of time.",
    author: "Virginia Woolf",
    genre: "Fiction",
    publicationYear: "1927",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689620123/BookHub/Books/To_the_Lighthouse_sajra0.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "Woolf's stream-of-consciousness writing style is captivating.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "This book reads like a beautiful work of art.",
      },
    ],
  },
  {
    id: "8",
    title: "The Lord of the Rings",
    description:
      "J.R.R. Tolkien's epic fantasy trilogy follows the journey of Frodo Baggins and the Fellowship of the Ring as they seek to destroy the One Ring and defeat the dark lord Sauron. The books are filled with adventure, rich world-building, and complex characters.",
    author: "J.R.R. Tolkien",
    genre: "Fantasy",
    publicationYear: "1954",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689620121/BookHub/Books/The_Lord_of_the_Rings_itupqr.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "Tolkien's world-building is unmatched in this timeless classic.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "This book transports you to Middle-earth with its immersive storytelling.",
      },
    ],
  },
  {
    id: "9",
    title: "Moby Dick",
    description:
      "Herman Melville's iconic novel follows Captain Ahab's relentless pursuit of the great white whale, Moby Dick. The book explores themes of obsession, fate, and humanity's struggle against nature.",
    author: "Herman Melville",
    genre: "Adventure",
    publicationYear: "1851",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689620122/BookHub/Books/Moby_Dick_owthfr.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "Melville's exploration of obsession is masterfully crafted.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment:
          "This book is filled with symbolism that leaves readers contemplating its meaning.",
      },
    ],
  },
  {
    id: "10",
    title: "Jane Eyre",
    description:
      "Charlotte Brontë's classic novel tells the story of Jane Eyre, an orphan who becomes a governess at Thornfield Hall. As Jane falls in love with the enigmatic Mr. Rochester, she must navigate societal expectations and confront her own sense of morality.",
    author: "Charlotte Brontë",
    genre: "Gothic",
    publicationYear: "1847",
    image:
      "https://res.cloudinary.com/codewithashim/image/upload/v1689620122/BookHub/Books/Jane_Eyre_fnas9a.jpg",
    reviews: [
      {
        id: "1",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "Jane Eyre's journey is both captivating and empowering.",
      },
      {
        id: "2",
        user: {
          userName: "Ashim",
          userProfile:
            "https://res.cloudinary.com/codewithashim/image/upload/v1689622860/BookHub/user_jhjnpf.jpg",
        },
        comment: "Charlotte Brontë's writing is hauntingly beautiful.",
      },
    ],
  },
];

const RecentBook: React.FC = () => {
  return (
    <section>
      <div className="sectionTitle">
        <h2>Recent Books</h2>
      </div>

      <div className="container flex justify-center items-center">
        <div className="grid gap-4 md:grid-cols-3 justify-center items-center self-auto">
          {RecentBookData.map((book: IBook, index) => {
            return <RecentBookCard key={index} book={book} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default RecentBook;
