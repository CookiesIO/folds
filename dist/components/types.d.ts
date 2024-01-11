import { ComponentPropsWithoutRef, ComponentPropsWithRef, ElementType, PropsWithChildren } from "react";
export declare type MainColor = "Primary" | "Secondary" | "Success" | "Warning" | "Critical";
export declare type ContainerColor = "Background" | "Surface" | "SurfaceVariant" | "Primary" | "Secondary" | "Success" | "Warning" | "Critical";
export declare type RefOfType<E extends ElementType> = ComponentPropsWithRef<E>["ref"];
export declare type AsProp<E extends ElementType> = {
    as?: E;
};
export declare type AsInProps<E extends ElementType, ExtraProps = object> = Omit<PropsWithChildren<ComponentPropsWithoutRef<E>>, keyof ExtraProps | keyof AsProp<ElementType>> & ExtraProps & AsProp<E>;
export declare type AsOutProps<E extends ElementType, ExtraProps = object> = Omit<PropsWithChildren<ComponentPropsWithRef<E>>, keyof ExtraProps | keyof AsProp<ElementType>> & ExtraProps & AsProp<E>;
