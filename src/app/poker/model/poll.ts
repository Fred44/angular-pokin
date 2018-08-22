export interface Poll {
  id: string;
  question: string;
  votesAreShown: boolean;
}

export interface Vote {
  votedAt: Date,
  card: string
}
