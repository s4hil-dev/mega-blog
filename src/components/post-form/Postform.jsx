import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Postform({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);
    const existingImageUrl = post?.featuredImage ? appwriteService.getFileView(post.featuredImage).toString() : '';

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-wrap gap-y-6">
            <div className="w-full px-2 lg:w-2/3">
                <Input
                    label="Title :"
                    placeholder="An evocative headline"
                    className="mb-4"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug :"
                    placeholder="clean-url-slug"
                    className="mb-4"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <div className="editor-shell">
                    <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
                </div>
            </div>
            <div className="w-full px-2 lg:w-1/3">
                <div className="glass-panel rounded-[28px] p-5">
                    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">Publish Settings</p>
                    <Input
                        label="Featured Image :"
                        type="file"
                        className="mb-4"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="mb-5 overflow-hidden rounded-[22px] bg-[linear-gradient(135deg,#eadbc8,#f7efe6)]">
                            {existingImageUrl ? (
                                <img
                                    src={existingImageUrl}
                                    alt={post.title}
                                    className="h-56 w-full object-cover"
                                />
                            ) : (
                                <div className='flex h-56 items-center justify-center text-sm font-semibold uppercase tracking-[0.24em] text-[var(--muted)]'>
                                    No image
                                </div>
                            )}
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-5"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" bgColor={post ? "bg-[#2f7d57]" : undefined} className="w-full">
                        {post ? "Update Post" : "Publish Post"}
                    </Button>
                </div>
            </div>
        </form>
    );
}
