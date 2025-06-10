import { commmentsType } from "@/types/comments";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ArticleIcon from "@mui/icons-material/Article";
import { Card, CardContent, Typography } from "@mui/material";

const Show_comments = ({ data }: { data: commmentsType[] }) => {
    return (
        <div style={{ padding: "1rem", display: "grid", gap: "1rem" }}>
            {data.map((val, index) => (
                <Card key={index} variant="outlined">
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            <PersonIcon style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                            {val.name}
                        </Typography>
                        <Typography color="textSecondary">
                            <FingerprintIcon style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                            ID: {val.id}
                        </Typography>
                        <Typography color="textSecondary">
                            <EmailIcon style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                            {val.email}
                        </Typography>
                        <Typography color="textSecondary">
                            <ArticleIcon style={{ verticalAlign: "middle", marginRight: "0.5rem" }} />
                            Post ID: {val.postId}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
};

export default Show_comments;