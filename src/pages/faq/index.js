import Typography, { Tags } from "../../components/atoms/typography";
import BoxedLayout from "../../components/template/boxed-layout";
import Image from "../../components/atoms/image";
import Logo from "../../assets/images/logo-big.gif";

const Faq = () => {
  return (
    <>
      <BoxedLayout>
        <Image src={Logo} />

        {/*  */}

        <Typography tag={Tags.H2}>Hacker News FAQ</Typography>

        <Typography tag={Tags.H3}>How are stories ranked?</Typography>
        <Typography tag={Tags.P}>
          The basic algorithm divides points by a power of the time since a
          story was submitted. Comments in threads are ranked the same way.
        </Typography>

        <Typography tag={Tags.P}>
          Other factors affecting rank include user flags, anti-abuse software,
          software which demotes overheated discussions, account or site
          weighting, and moderator action.
        </Typography>

        <Typography tag={Tags.H3}>How is a user's karma calculated?</Typography>
        <Typography tag={Tags.P}>
          Roughly, the number of upvotes on their posts minus the number of
          downvotes. These don't match up exactly. Some votes are dropped by
          anti-abuse software.
        </Typography>
        <Typography tag={Tags.H3}>
          Do posts by users with more karma rank higher?
        </Typography>
        <Typography tag={Tags.P}>No.</Typography>

        <Typography tag={Tags.H3}>Why don't I see down arrows?</Typography>
        <Typography tag={Tags.P}>
          There are no down arrows on stories. They appear on comments after
          users reach a certain karma threshold, but never on direct replies.
        </Typography>

        <Typography tag={Tags.H3}>How do I submit a question?</Typography>
        <Typography tag={Tags.P}>
          Use the submit link in the top bar, and leave the url field blank.
        </Typography>

        <Typography tag={Tags.H3}>
          How do I make a link in a text submission?
        </Typography>
        <Typography tag={Tags.P}>
          You can't. This is to prevent people from submitting a link with their
          comments in a privileged position at the top of the page. If you want
          to submit a link with comments, just submit it, then add a regular
          comment.
        </Typography>
      </BoxedLayout>
    </>
  );
};

export default Faq;
