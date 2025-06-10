import { commmentsType } from "@/types/comments";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import ArticleIcon from "@mui/icons-material/Article";
import { CardContent, Typography, Avatar, Divider, Box } from "@mui/material";

const CARD_WIDTH = 340;
const CARD_HEIGHT = 300;

const Show_comments = ({ data }: { data: commmentsType[] }) => {
    return (
        <div className="p-6 bg-[#f5f7fa] min-h-screen">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
                {data.map((val: commmentsType, index) => (
                    <div
                        key={index}
                        className="flex justify-center"
                        style={{ width: CARD_WIDTH, minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH, height: CARD_HEIGHT }}
                    >
                        <div
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 flex flex-col w-full h-full"
                        >
                            <CardContent sx={{ flex: 1, display: "flex", flexDirection: "column", height: "100%" }}>
                                <Box display="flex" alignItems="center" mb={2}>
                                    <Avatar sx={{ bgcolor: "#1976d2", mr: 2 }}>
                                        <PersonIcon />
                                    </Avatar>
                                    <Typography variant="h6" fontWeight={600} noWrap>
                                        {val.name}
                                    </Typography>
                                </Box>
                                <Divider sx={{ mb: 2 }} />
                                <Box display="flex" alignItems="center" mb={1}>
                                    <FingerprintIcon color="action" sx={{ mr: 1 }} />
                                    <Typography color="text.secondary" fontSize={14}>
                                        <b>کد کاربر:</b> {val.id}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <EmailIcon color="action" sx={{ mr: 1 }} />
                                    <Typography color="text.secondary" fontSize={14} noWrap>
                                        {val.email}
                                    </Typography>
                                </Box>
                                <Box display="flex" alignItems="center" mt="auto">
                                    <ArticleIcon color="action" sx={{ mr: 1 }} />
                                    <Typography color="text.secondary" fontSize={14}>
                                        <b>پست:</b> {val.postId}
                                    </Typography>
                                </Box>
                            </CardContent>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Show_comments;